export const UserContext = createContext()

function UserProvider({ children }) {

    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export default DanaProvider
