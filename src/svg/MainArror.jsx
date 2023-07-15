



export default function ArrorSvg({width}) {

    return (
      <svg
        className="arror-svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="200"
        viewBox="0 0 24 24"
      >
        <g transform="rotate(180 12 12)">
          <g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)">
            <g
              fill="none"
              stroke="#fffbe9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="20;0"
                />
              </path>
              <path
                stroke-dasharray="12"
                stroke-dashoffset="12"
                d="M3 12L10 19M3 12L10 5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.3s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
            </g>
          </g>
        </g>
      </svg>
    );
}
