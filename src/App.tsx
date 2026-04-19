import './App.css'
import {BranchA} from "./components/branchA/BranchA.tsx";
import {BranchB} from "./components/branchB/BranchB.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


function App() {

    const [themeColor, setThemeColor] = useState<string>('light')

    return (
        <div>
            <MyContext value={{
                theme: themeColor,
                changeTheme: (themeColor: string) => {
                    setThemeColor(themeColor)
                },
            }}>
            <BranchA/>
            <BranchB/>
            </MyContext>
        </div>
    )
}

export default App
