import { useEffect, useState } from 'react'

export function useAdminClaim(database) {
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    async function checkAdminClaim() {
      try {
        const { data:isAdmin, error } = await database.rpc('is_claims_admin', {});
        if (error) {
          setIsAdmin(false)
        } else {
          setIsAdmin(isAdmin)
        }
      } catch (error) {
        setIsAdmin(false)
      }
    }
    checkAdminClaim()
  })
  return isAdmin
}


