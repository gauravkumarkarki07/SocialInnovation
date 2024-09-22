
function Header() {
  return (
    <section className="flex justify-between py-2 items-center px-2">
        <h1 className="text-xl font-semibold">
            Social Innovation
        </h1>
        <section>
            <ul className="flex gap-4 items-center">
                <li>Search Bar</li>
                <li>User Profile</li>
                <li>Notification</li>
            </ul>
        </section>
    </section>
  )
}

export default Header