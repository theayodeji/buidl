import Link from "next/link"

const Links = () => {

    const links =[
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Dashboard',
        url: '/dashboard'
      },
      {
        title: 'Listings',
        url: '/listings'
      },
      {
        title: 'Support',
        url: '/support'
      }
    ]

  return (
    <ul>
      {links.map((link, index) => (
        <li className="nav-link" key={index}>
          <Link href={link.url}>{link.title}</Link>
        </li>
      ))}
      <li>
        <button>Login with Steam</button>
      </li>
      <li>
        <div className="theme-toggle"></div>
      </li>
    </ul>
  )
}

export default Links