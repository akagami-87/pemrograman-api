"use client"

interface IViewUserButton {
    userId: number
}

const ViewUserButton: React.FC<IViewUserButton> = ({userId}) => {
    const handleClick = () => {
       alert(`User ID: ${userId}`)
    }
    return (
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
    )
}

export default ViewUserButton