import Link from "next/link";
import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// 컴포넌트 상단에 추가
const navItems = [
  { href: "/stores", label: "맛집 목록" },
  { href: "/stores/new", label: "맛집 등록" },
  { href: "/stores/likes", label: "찜한 가게" },
  { href: "/users/login", label: "로그인" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link href="/" className="navbar__logo">
          nextmap
        </Link>
        <div className="navbar__list">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navbar__list--item"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 모바일 버튼 */}
        <div
          role="button"
          tabIndex={0}
          className="navbar__button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? (
            <AiOutlineClose aria-label="메뉴 닫기" />
          ) : (
            <BiMenu aria-label="메뉴 열기" />
          )}
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="navbar__list--item--mobile"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
