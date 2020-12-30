const notificationReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data.notification
      case 'CLEAR_NOTIFICATION':
        return ''
      default:
        return state
    }
  }
  
  export const NewNotification = (notification) => {
    return {
      type: 'SET_NOTIFICATION',
      data: {notification}
    }
  }
  
  export const clearNotification = () => {
    return {
      type: 'CLEAR_NOTIFICATION'
    }
  }

  export default notificationReducer