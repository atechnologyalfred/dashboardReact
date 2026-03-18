function AuthLayout({ children, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
        {children}
    </form>
  );}

export default AuthLayout;