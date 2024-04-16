import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faBootstrap, faReact, faLaravel } from "@fortawesome/free-brands-svg-icons";

export function ButtonFaMoon({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  );
}
export function ButtonFaSun({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faSun} />
      </div>
    </div>
  );
}
export function ButtonFaHtml5({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faHtml5} />
      </div>
    </div>
  );
}
export function ButtonFaCss3Alt({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faCss3Alt} />
      </div>
    </div>
  );
}
export function ButtonFaBootstrap({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faBootstrap} />
      </div>
    </div>
  );
}
export function ButtonFaReact({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon className="animate-spin z-0" icon={faReact} />
      </div>
    </div>
  );
}
export function ButtonFaLaravel({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faLaravel} />
      </div>
    </div>
  );
}
export function ButtonFaCaretUp({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faCaretUp} />
      </div>
    </div>
  );
}