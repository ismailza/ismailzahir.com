'use client';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {CalendarIcon, TagIcon, UserIcon} from "lucide-react";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import Loading from "@/app/projects/[slug]/loading";
import NotFound from "next/dist/client/components/not-found-error";
import Link from "next/link";
import Title from "@/components/Title";
import {ProjectProps} from "@/lib/types";

export default function Project({ params }: { params: { slug: string } }) {

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<ProjectProps | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      await fetch(`/api/projects/${params.slug}`)
        .then((res) => res.json())
        .then((data: ProjectProps) => setProject(data))
        .catch((error) => toast.error(error.message))
        .finally(() => setLoading(false));
    }
    fetchProject()
      .then(() => console.log("Project data fetched successfully!"))
  }, [params.slug]);

  if (loading) {
    return Loading();
  }

  if (!project) {
    return NotFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {project.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4"/>
                  <span>
                    {new Date(project.timeline.end).getFullYear()}
                  </span>
                </div>
                <div
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  <TagIcon className="mr-2 h-4 w-4"/>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={project.image}
              alt={project.title}
            />
            <div className="flex w-full gap-x-2 mt-4">
              {project.demo &&
                <Link href={project.demo}
                      className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">

                  <span>Live Demo</span>
                </Link>
              }
              {project.release &&
                <Link href={project.release}
                      className="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">

                  <span>Latest release</span>
                </Link>
              }
              {project.github &&
                <Link href={project.github}
                      className="bg-black rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5">

                  <span>Code on GitHub</span>
                </Link>
              }
            </div>
          </div>
        </div>
      </header>
      <section className="container px-6 py-4 mx-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
        <div className="mt-8 xl:mt-16 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <Title>Project Overview</Title>
            <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
              {project.overview}
            </p>
          </div>
          <div>
            <Title>Project Détails</Title>
            <div className="mt-4 grid gap-4">

              <div>
                <h3 className="text-sm text-blue-500 capitalize">Technologies</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  {project.technologies.join(', ')}
                </span>
              </div>
              <hr className="my-1 border-gray-200 dark:border-gray-700"/>
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Timeline</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  {project.timeline.start} - {project.timeline.end}
                </span>
              </div>
              <hr className="my-1 border-gray-200 dark:border-gray-700"/>
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Team</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  <ul className="text-base space-y-2">
                  {project.team.map((member) => (
                    <li key={member.name} className={'flex flex-col'}>
                  <span className={'flex space-x-4'}>
                    <UserIcon/> {member.name}
                    <span className={'flex space-x-2'}>
                      {member.linkedin && <a href={member.linkedin} target={'_blank'}><LinkedInLogoIcon/></a>}
                      {member.github && <a href={member.github} target={'_blank'}><GitHubLogoIcon/></a>}
                    </span>
                  </span>
                      {member.role &&
                        <span className={'text-sm text-gray-500 dark:text-gray-400 ml-2'}>{member.role}</span>}
                    </li>
                  ))
                  }
                </ul>
                </span>
              </div>
              <hr className="my-1 border-gray-200 dark:border-gray-700"/>
              <div>
                <h3 className="text-sm text-blue-500 capitalize">Features</h3>
                <span
                  className="block mt-1 font-medium text-base text-gray-700 hover:text-gray-500 dark:text-gray-300">
                  <ul className="text-base space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
