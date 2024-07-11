import React from 'react'
import {Avatar, Menu} from '@mantine/core'

const ProfileMenu = ({user, logout}) => {
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={"sm"}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item>
                Favourites
            </Menu.Item>

            <Menu.Item onClick={()=>{
              localStorage.clear()
              logout();
            }}>
              LogOut
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu