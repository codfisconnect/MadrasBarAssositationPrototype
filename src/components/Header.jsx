import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import menu from "./MenuData";
import "../Styles/Header.css"; // Importing standard plain CSS file

function Header({ setActivePage }) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const handleMenuClick = (e, item, labelItem = null) => {
    if (item.items && !labelItem) {
      e.preventDefault();
      return;
    }

    if (item.label === "Home") {
      e.preventDefault();
      setActivePage("home");
      setOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (item.label === "Members") {
      e.preventDefault();
      setActivePage("members");
      setOpen(false);
    }

    if (item.label === "Office Bearers") {
      e.preventDefault();
      if (labelItem === "2026-2028") {
        setActivePage("office-bearers");
      } else if (labelItem) {
        setActivePage(`office-bearers-${labelItem}`);
      }
      setOpen(false);
    }

    if (item.label === "About" && labelItem) {
      e.preventDefault();
      setActivePage(`about-${labelItem.toLowerCase().replace(/\s+/g, "-")}`);
      setOpen(false);
    }

    if (item.label === "Gallery") {
      e.preventDefault();
      setActivePage("Gallery");
      setOpen(false);
    }

    if (
      !item.items &&
      item.label !== "Home" &&
      item.label !== "Members" &&
      item.label !== "Gallery"
    ) {
      e.preventDefault();
      setActivePage(item.label.toLowerCase().replace(/\s+/g, "-"));
      setOpen(false);
    }
  };

  const handleMemberLogin = (e) => {
    e.preventDefault();
    setActivePage("member-login");
    setOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setActivePage("contact");
    setOpen(false);
  };

  const handleConstitutionClick = (e) => {
    e.preventDefault();
    setActivePage("constitution");
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setActivePage("home");
          }}
        >
          <Logo />
        </a>

        {/* Desktop Navigation Layout Bar */}
        <nav className="desktop-nav">
          {menu.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => {
                setTimeout(() => {
                  setDropdown(null);
                }, 180);
              }}
            >
              <a
                href={item.href || "#"}
                onClick={(e) => handleMenuClick(e, item)}
                className="nav-link"
              >
                {item.label}
                {item.items && <ChevronDown size={14} />}
              </a>

              {/* Desktop Dropdown Flyouts */}
              {item.items && dropdown === index && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="desktop-dropdown"
                >
                  {item.items.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      onClick={(e) => handleMenuClick(e, item, sub)}
                      className="dropdown-item"
                    >
                      {sub}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button Triggers */}

        <div className="action-buttons">
          <button onClick={handleConstitutionClick} className="btn-contact">
            Constitution Of INDIA
          </button>
          {/* <button onClick={handleContactClick} className="btn-contact">
            Contact Us
          </button> */}

          <button onClick={handleMemberLogin} className="btn-login">
            Member Login
          </button>
        </div>

        {/* Mobile Hamburger Toggle Wrapper */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-toggle-btn"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Panel Layout View */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-drawer"
          >
            <div className="mobile-nav-list">
              {menu.map((item, idx) => (
                <div key={item.label} className="w-full">
                  {item.items ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === idx ? null : idx)
                        }
                        className="mobile-nav-link mobile-accordion-trigger"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          style={{
                            transform:
                              mobileDropdown === idx
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        />
                      </button>
                      {mobileDropdown === idx && (
                        <div className="mobile-submenu">
                          {item.items.map((sub) => (
                            <a
                              key={sub}
                              href="#"
                              onClick={(e) => handleMenuClick(e, item, sub)}
                              className="mobile-submenu-item"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href || "#"}
                      onClick={(e) => handleMenuClick(e, item)}
                      className="mobile-nav-link"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile CTA Action Triggers */}
              <div className="mobile-actions">
                <button onClick={handleContactClick} className="btn-contact">
                  Contact Us
                </button>
                <button onClick={handleMemberLogin} className="btn-login">
                  Member Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
