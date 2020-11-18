import { useState, useEffect } from 'react'


function useFriendStatus(friendId){
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    })

    function handleStatusChange(status){
        setIsOnline(status.isOnline)
    }

    return isOnline
}