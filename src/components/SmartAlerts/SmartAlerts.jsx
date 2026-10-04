import { useEffect, useState } from "react"
import opportunities from "../../data/opportunities"

import {
  getEventStatus,
  getMinutesUntilEvent,
  getDeadlineStatus,
  getMinutesUntilDeadline,
  formatTimeRemaining,
  sendBrowserNotification,
  requestNotificationPermission,
} from "../../utils/notificationUtils"

function SmartAlerts() {
  const [alerts, setAlerts] = useState([])
  const [notificationPermission, setNotificationPermission] =
    useState("default")

  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    if ("Notification" in window) {
      setNotificationPermission(Notification.permission)
    }
  }, [])

  useEffect(() => {
    checkAlerts()

    const interval = setInterval(() => {
      checkAlerts()
    }, 30000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  function getSavedOpportunities() {
    try {
      return JSON.parse(
        localStorage.getItem("savedOpportunities") || "[]"
      )
    } catch {
      return []
    }
  }

  function isSaved(opportunityId) {
    const saved = getSavedOpportunities()

    return saved.some(
      (item) => item.id === opportunityId
    )
  }

  function checkAlerts() {
    const newAlerts = []

    opportunities.forEach((opportunity) => {
      const eventStatus = getEventStatus(opportunity)
      const eventMinutes = getMinutesUntilEvent(opportunity)

      if (
        eventStatus &&
        eventStatus.type !== "upcoming" &&
        eventStatus.type !== "ended"
      ) {
        newAlerts.push({
          id: `event-${opportunity.id}-${eventStatus.type}`,
          type: "event",
          status: eventStatus,
          opportunity,
          minutes: eventMinutes,
          saved: isSaved(opportunity.id),
        })
      }

      const deadlineStatus = getDeadlineStatus(opportunity)
      const deadlineMinutes =
        getMinutesUntilDeadline(opportunity)

      if (
        deadlineStatus &&
        deadlineStatus.type !== "safe" &&
        deadlineStatus.type !== "expired"
      ) {
        newAlerts.push({
          id: `deadline-${opportunity.id}-${deadlineStatus.type}`,
          type: "deadline",
          status: deadlineStatus,
          opportunity,
          minutes: deadlineMinutes,
          saved: isSaved(opportunity.id),
        })
      }
    })

    setAlerts(newAlerts)

    checkBrowserNotifications(newAlerts)
  }

  function checkBrowserNotifications(currentAlerts) {
    currentAlerts.forEach((alert) => {
      const notificationKey = `notification-${alert.id}`

      const alreadySent =
        localStorage.getItem(notificationKey)

      if (alreadySent) {
        return
      }

      if (
        alert.type === "event" &&
        ["30min", "now"].includes(alert.status.type)
      ) {
        sendBrowserNotification(
          alert.status.label,
          `${alert.opportunity.title} ${alert.status.label.toLowerCase()}.`,
          alert.opportunity.joinUrl ||
            alert.opportunity.applyUrl
        )

        localStorage.setItem(notificationKey, "true")
      }

      if (
        alert.type === "deadline" &&
        alert.status.type === "urgent"
      ) {
        sendBrowserNotification(
          "Deadline Alert",
          `${alert.opportunity.title} - ${alert.status.label}.`,
          alert.opportunity.applyUrl
        )

        localStorage.setItem(notificationKey, "true")
      }
    })
  }

  async function enableNotifications() {
    const permission =
      await requestNotificationPermission()

    setNotificationPermission(permission)

    if (permission === "granted") {
      sendBrowserNotification(
        "StudentHub Alerts Enabled",
        "You will receive important opportunity reminders."
      )
    }
  }

  function closeAlert(alertId) {
    setAlerts((currentAlerts) =>
      currentAlerts.filter(
        (alert) => alert.id !== alertId
      )
    )
  }

  function getAlertMessage(alert) {
    const { opportunity, type, status } = alert

    if (type === "event") {
      if (status.type === "now") {
        return `${opportunity.title} is starting now.`
      }

      if (status.type === "30min") {
        return `${opportunity.title} starts in 30 minutes.`
      }

      if (status.type === "2hours") {
        return `${opportunity.title} starts in about 2 hours.`
      }

      return `${opportunity.title} starts tomorrow.`
    }

    return `${opportunity.title} application ${status.label.toLowerCase()}.`
  }

  return (
    <>
      {/* Floating alert button */}

      <button
        className={`smart-alert-button ${
          alerts.length > 0 ? "has-alerts" : ""
        }`}
        onClick={() => setShowPanel(!showPanel)}
        aria-label="Smart Alerts"
      >
        🔔

        {alerts.length > 0 && (
          <span className="alert-count">
            {alerts.length}
          </span>
        )}
      </button>

      {/* Notification panel */}

      {showPanel && (
        <div className="smart-alert-panel">

          <div className="smart-alert-header">

            <div>
              <span className="section-label">
                STUDENTHUB
              </span>

              <h3>Smart Alerts</h3>
            </div>

            <button
              className="smart-alert-close-panel"
              onClick={() => setShowPanel(false)}
            >
              ✕
            </button>

          </div>

          {/* Browser notification permission */}

          {notificationPermission !== "granted" && (
            <div className="notification-permission">

              <div>
                <strong>
                  🔔 Enable Notifications
                </strong>

                <p>
                  Get important reminders when an
                  opportunity is starting soon.
                </p>
              </div>

              <button
                onClick={enableNotifications}
              >
                Enable
              </button>

            </div>
          )}

          {/* Alerts */}

          {alerts.length === 0 ? (

            <div className="no-alerts">

              <div className="no-alerts-icon">
                🎉
              </div>

              <h4>No urgent alerts</h4>

              <p>
                You're all caught up. StudentHub
                will remind you when something
                important is coming up.
              </p>

            </div>

          ) : (

            <div className="alerts-list">

              {alerts.map((alert) => (

                <div
                  className={`smart-alert-card ${alert.type}`}
                  key={alert.id}
                >

                  <div className="smart-alert-card-top">

                    <div className="smart-alert-icon">
                      {alert.opportunity.icon}
                    </div>

                    <button
                      className="smart-alert-dismiss"
                      onClick={() =>
                        closeAlert(alert.id)
                      }
                    >
                      ✕
                    </button>

                  </div>

                  <div className="smart-alert-status">
                    {alert.status.icon}{" "}
                    {alert.status.label}
                  </div>

                  <h4>
                    {alert.opportunity.title}
                  </h4>

                  <p className="smart-alert-message">
                    {getAlertMessage(alert)}
                  </p>

                  {alert.minutes !== null && (
                    <div className="smart-alert-time">
                      ⏱{" "}
                      {formatTimeRemaining(
                        alert.minutes
                      )}
                    </div>
                  )}

                  {alert.saved && (
                    <div className="personal-alert">
                      🎯 Saved by you
                    </div>
                  )}

                  <a
                    href={
                      alert.type === "event"
                        ? alert.opportunity.joinUrl ||
                          alert.opportunity.applyUrl
                        : alert.opportunity.applyUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn smart-alert-action"
                  >
                    {alert.type === "event"
                      ? "Join / View Event →"
                      : "Apply Now →"}
                  </a>

                </div>

              ))}

            </div>

          )}

        </div>
      )}
    </>
  )
}

export default SmartAlerts