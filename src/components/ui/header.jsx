import {Link, useSearchParams} from "react-router-dom";
import { Button } from "./button";
import { SignInButton,SignIn, useUser } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { BriefcaseBusinessIcon, Heart, PenBox } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
    const [showSignIn,setShowSignIn] = useState(false);
    
    const [search, setSearch] = useSearchParams(false);

    const {user} = useUser();

    useEffect(() => {
        if(search.get("sign-in")){
            setShowSignIn(true);
        }
    },[search])

    const handleOverLayClick = (e) => {
        if(e.target === e.currentTarget)
        {
            setShowSignIn(false);
            setSearch({});
        }
    }
    
  return (
    <>
        <nav className="py-4 flex justify-between items-center"> 
            <Link to="/">
                <img src="/logo.png" className="h-20" />
            </Link>

        <div className="flex gap-8">
            <SignedOut>    
                <Button variant="outline" onClick={()=> setShowSignIn(true)}>Login</Button>
            </SignedOut>
            <SignedIn>
                {user?.unsafeMetadata?.role === "recruiter" && (
                <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a Job
                </Button>
                </Link>
                )}
                <UserButton 
                appearance={{
                    elements:{
                        avatarBox: "w-10 h-10"
                    }
                }}>
                    <UserButton.MenuItems>
                        <UserButton.Link
                        label="My Jobs"
                        labelIcon={<BriefcaseBusinessIcon size={15}/>}
                        href="/my-jobs" />
                        <UserButton.Link
                        label="Saved Jobs"
                        labelIcon={<Heart size={15}/>}
                        href="/saved-job" />
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
        </div>
        </nav>

        {showSignIn && ( 
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
            onClick={handleOverLayClick}>
            <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
            />
            </div>
        )}
    </>
  )
}

export default Header