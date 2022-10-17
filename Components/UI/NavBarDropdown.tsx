import {Menu} from '@headlessui/react'
const NavBarDropdown = () => {
    return (
        <Menu>
              <Menu.Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items>
              <Menu.Item>
                <a href="#" className="px-2 font-medium">
                  MEN
                </a>
              </Menu.Item>
              <Menu.Item>
              <a href="#" className="px-2 font-medium">
                WOMEN
              </a>
              </Menu.Item>
              <Menu.Item>
              <a href="#" className="px-2 font-medium">
                KIDS
              </a>
              </Menu.Item>
              <Menu.Item>
              <a href="#" className="px-2">
                SPORTS
              </a>
              </Menu.Item>
              <Menu.Item>
              <a href="#" className="px-2">
                BRANDS
              </a>
              </Menu.Item>
              <Menu.Item>
              <a href="#" className="px-2">
                GIFT GUIDE
              </a>
              </Menu.Item>
              </Menu.Items>
            </Menu>
    )
}

export default NavBarDropdown