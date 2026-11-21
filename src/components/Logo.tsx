import { Link } from "react-router-dom";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label="Fancy Attires home">
      <span className="logo__mark" aria-hidden="true">
        FA
      </span>
      <span className="logo__words">
        <strong>FANCY ATTIRES</strong>
        <small>Elegance, thoughtfully made</small>
      </span>
    </Link>
  );
}
