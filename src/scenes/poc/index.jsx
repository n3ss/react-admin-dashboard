import { useEffect } from "react"
// import { SupabaseContext } from "../../App";

const Poc = () => {
  // const supabase = useContext(SupabaseContext);

  useEffect(() => {
    // supabase.auth.getSession().then(({ data: { session } }) => {
    // setSession(session)
    // })

    // supabase.auth.onAuthStateChange((_event, session) => {
    // setSession(session)
    // })
  }, [])

  return (
    // <div className="container" style={{ padding: '50px 0 100px 0' }}>
    // {!session ? 'anon' : session.user.id}
    // </div>
    <div>toto</div>
  )
}

export default Poc;
