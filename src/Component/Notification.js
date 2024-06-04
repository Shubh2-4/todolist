import React from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css';

export default function Notification() {
    let noti = () => {
        NotificationManager.info('Info message');
    }
  return (
    <div>

        <div className='container my-5'>
            <NotificationContainer/>
            <button onClick={noti}>Notification</button>
        </div>
    </div>
  )
}
