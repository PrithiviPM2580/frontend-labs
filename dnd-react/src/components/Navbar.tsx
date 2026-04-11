import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-lg font-semibold tracking-wide">
          PPM
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/basic"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Basic
          </NavLink>
          <NavLink
            to="/sortable"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Sortable
          </NavLink>
          <NavLink
            to="/kanban"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Kanban
          </NavLink>
          <NavLink
            to="/level1"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Level1
          </NavLink>
          <NavLink
            to="/level2"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Level2
          </NavLink>
          <NavLink
            to="/level3"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`
            }
          >
            Level3
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
