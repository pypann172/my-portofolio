type ThemeToggleProps = {
    isDarkMode: boolean;
    onToggle: (origin: { x: number; y: number }) => void;
    mobile?: boolean;
};

export default function ThemeToggle({ isDarkMode, onToggle, mobile = false }: ThemeToggleProps) {
    return (
        <button
            type="button"
            onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                onToggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
            }}
            aria-label={isDarkMode ? "Aktifkan light mode" : "Aktifkan dark mode"}
            aria-pressed={isDarkMode}
            title={isDarkMode ? "Aktifkan light mode" : "Aktifkan dark mode"}
            className={`theme-toggle ${mobile ? "theme-toggle-mobile" : "theme-toggle-desktop"}`}
        >
            <span className="theme-toggle-icon" aria-hidden="true">{isDarkMode ? "☀" : "☾"}</span>
            {!mobile && <span className="theme-toggle-label">{isDarkMode ? "Light" : "Dark"}</span>}
            <span className={`theme-toggle-track ${isDarkMode ? "is-dark" : ""}`} aria-hidden="true">
                <span className="theme-toggle-thumb" />
            </span>
        </button>
    );
}
