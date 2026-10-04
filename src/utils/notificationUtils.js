export function getEventDateTime(opportunity) {
  if (!opportunity.startDate || !opportunity.startTime) {
    return null
  }

  return new Date(
    `${opportunity.startDate}T${opportunity.startTime}:00`
  )
}

export function getEndDateTime(opportunity) {
  if (!opportunity.startDate || !opportunity.endTime) {
    return null
  }

  return new Date(
    `${opportunity.startDate}T${opportunity.endTime}:00`
  )
}

export function getDeadlineDateTime(opportunity) {
  if (!opportunity.deadlineDate) {
    return null
  }

  return new Date(opportunity.deadlineDate)
}

export function getMinutesUntilEvent(opportunity) {
  const eventTime = getEventDateTime(opportunity)

  if (!eventTime) {
    return null
  }

  const now = new Date()

  return Math.floor(
    (eventTime.getTime() - now.getTime()) / 60000
  )
}

export function getMinutesUntilDeadline(opportunity) {
  const deadlineTime = getDeadlineDateTime(opportunity)

  if (!deadlineTime) {
    return null
  }

  const now = new Date()

  return Math.floor(
    (deadlineTime.getTime() - now.getTime()) / 60000
  )
}

export function getEventStatus(opportunity) {
  const minutesUntil = getMinutesUntilEvent(opportunity)

  if (minutesUntil === null) {
    return null
  }

  const endTime = getEndDateTime(opportunity)

  if (endTime && new Date() >= endTime) {
    return {
      type: "ended",
      label: "Event Ended",
      icon: "⚫",
    }
  }

  if (minutesUntil <= 0) {
    return {
      type: "now",
      label: "Starting Now",
      icon: "🔴",
    }
  }

  if (minutesUntil <= 30) {
    return {
      type: "30min",
      label: "Starts in 30 minutes",
      icon: "🔴",
    }
  }

  if (minutesUntil <= 120) {
    return {
      type: "2hours",
      label: "Starts in 2 hours",
      icon: "🟠",
    }
  }

  if (minutesUntil <= 1440) {
    return {
      type: "24hours",
      label: "Starts tomorrow",
      icon: "🟡",
    }
  }

  return {
    type: "upcoming",
    label: "Upcoming",
    icon: "🟢",
  }
}

export function getDeadlineStatus(opportunity) {
  const minutesUntil = getMinutesUntilDeadline(opportunity)

  if (minutesUntil === null) {
    return null
  }

  if (minutesUntil <= 0) {
    return {
      type: "expired",
      label: "Deadline Passed",
      icon: "⚫",
    }
  }

  if (minutesUntil <= 60) {
    return {
      type: "urgent",
      label: "Deadline in less than 1 hour",
      icon: "🔴",
    }
  }

  if (minutesUntil <= 1440) {
    return {
      type: "urgent",
      label: "Deadline today",
      icon: "🔴",
    }
  }

  if (minutesUntil <= 3 * 1440) {
    return {
      type: "soon",
      label: "Deadline in 3 days",
      icon: "🟠",
    }
  }

  if (minutesUntil <= 7 * 1440) {
    return {
      type: "soon",
      label: "Deadline this week",
      icon: "🟡",
    }
  }

  return {
    type: "safe",
    label: "Deadline upcoming",
    icon: "🟢",
  }
}

export function formatTimeRemaining(minutes) {
  if (minutes === null) {
    return ""
  }

  if (minutes <= 0) {
    return "Starting now"
  }

  const days = Math.floor(minutes / 1440)
  const hours = Math.floor((minutes % 1440) / 60)
  const mins = minutes % 60

  if (days > 0) {
    return `${days}d ${hours}h remaining`
  }

  if (hours > 0) {
    return `${hours}h ${mins}m remaining`
  }

  return `${mins}m remaining`
}

export function sendBrowserNotification(title, message, url = "") {
  if (!("Notification" in window)) {
    return
  }

  if (Notification.permission !== "granted") {
    return
  }

  const notification = new Notification(title, {
    body: message,
    icon: "/vite.svg",
  })

  if (url) {
    notification.onclick = () => {
      window.open(url, "_blank")
    }
  }
}

export async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    return "unsupported"
  }

  if (Notification.permission === "granted") {
    return "granted"
  }

  if (Notification.permission === "denied") {
    return "denied"
  }

  const permission = await Notification.requestPermission()

  return permission
}