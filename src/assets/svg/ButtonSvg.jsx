const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M21,43 C21,43 1,43 1,22 C1,1 21,1 21,1"
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
        </>
      )}
    </svg>
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M0,43 L20,43 L20,22 C20,1 0,1 0,1"
      />
    </svg>
  </>
);

export default ButtonSvg;
