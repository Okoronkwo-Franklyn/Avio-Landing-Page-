// Following the assignment instructions, i added a ui folder/buttons for repeated use in the project

const VARIANTS = {
  black: "bg-ink text-white hover:bg-graphite",
  white: "bg-white text-ink hover:bg-white/90",
  outline: "bg-transparent text-ink border border-ink/15 hover:bg-ink/[0.03]",
};

function Button({
  children,
  variant = "black",
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}


export default Button