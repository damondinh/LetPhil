export const NavBar = ({navItems}) => {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-8 p-2 text-sm text-gray-800">
          {navItems.map((item, index) => (
            // If the item has an icon, render the icon, otherwise render the label
             item.icon ? (
              <li key={item+index}><span className="material-symbols-outlined">{item.icon}</span></li>
            ) : (
              <li key={item+index}>{item.label}</li>
          )))}
      </ul>
    </nav>
  );
}