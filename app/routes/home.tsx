import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import { resumes } from"./../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter"
import { useNavigate } from "react-router";
import { useEffect } from "react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart FeedBack for your job" },
  ];
}

export default function Home() {

  const {auth} = usePuterStore();
  const navigate = useNavigate();

  useEffect( () => {
      if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return (
  <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <NavBar />
          <section className="main-section">
            <div className="page-heading py-16">
            <h1>Track Your Applications & Resume Ratings</h1>
            </div>
            {resumes.length > 0 && (
            <div className="resumes-section">
              { resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume}/>
              ))}
            </div>
          )}
          </section>
  </main>
  );
}
