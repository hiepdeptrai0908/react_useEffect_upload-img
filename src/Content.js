
import { useState, useEffect } from 'react'


const Content = () => {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar)
        }
    }, [avatar])


    const handleChangeImage = (e) => {
        const file = e.target.files[0]
        setAvatar(URL.createObjectURL(file))
    }

    return (
        <div>
            <div>
                <input
                    type="file"
                    onChange={handleChangeImage}
                />
            </div>
            <img src={avatar} width='500px' height='auto'></img>
        </div>
    )
}

export default Content