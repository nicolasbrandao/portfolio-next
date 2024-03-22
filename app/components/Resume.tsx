import Image from 'next/image'
import {
  FaLocationDot,
  FaLinkedin,
  FaGithub,
  FaBookOpen,
  FaCompassDrafting,
} from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { PiBrowsersFill } from 'react-icons/pi'
import { BsTranslate } from 'react-icons/bs'
import ProfileImage from '@/public/profile_picture.png'

function Resume() {
  return (
    <div className="w-[210.1mm] h-[296.2mm] border mx-auto bg-[#FFF] p-[5mm] text-bcg1 grid grid-cols-3 grid-rows-6 gap-1">
      <div className="relative col-span-2 row-span-1 flex gap-1">
        <div className="bg-[#313c4e] w-[15px] rounded-lg" />
        <div className="bg-[#ebebeb] p-2 rounded-l-lg flex w-full items-center gap-1 text-[#313c4e]">
          <Image
            className="rounded-full w-[130px] h-[130px] border-4 border-[#313c4e]"
            src={ProfileImage}
            height={130}
            width={130}
            alt="Nícolas Brandão"
          />
          <div>
            <h1 className="text-[#313c4e] font-bold text-[35px]">
              Nícolas Brandão
            </h1>
            <h2 className="text-[20px]">Full Stack Developer</h2>
            <p className="text-xs italic">
              Crafting clean and well-structured code with a unique perspective
              shaped by my engineering background.
            </p>
          </div>
        </div>
        <div className="absolute h-6 w-6 rounded-full border-4 border-[#FFF] bottom-[-14px] right-[-14px] z-10 bg-[#449399]" />
      </div>
      <div className="bg-[#313c4e] rounded-tr-lg col-span-1 row-span-1 text-frg1 p-2 text-sm flex flex-col gap-1 justify-center">
        <div className="flex gap-1 items-center">
          <FaLocationDot />
          <p>Divinópolis, MG - Brazil</p>
        </div>
        <div className="flex gap-1 items-center">
          <IoMdMail />
          <p>nicolas.brandaor@gmail.com</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaPhone />
          <p>+55 37 9 9112 4140</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaLinkedin />
          <p>/in/nicolasbrandao</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaGithub />
          <p>/nicolasbrandao</p>
        </div>
        <div className="flex gap-1 items-center">
          <PiBrowsersFill />
          <p>nicolasbrandao.dev</p>
        </div>
      </div>
      <div className="row-span-5 col-span-2 py-2">
        <div className="flex flex-col gap-1 text-[#313c4e]">
          <div className="flex items-center gap-1">
            <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center">
              <IoBriefcaseOutline className="h-6 w-6" />
            </div>
            <h3 className="text-[1.5rem] font-bold">Work Experience</h3>
          </div>
          <div>
            <p className="font-bold">Full Stack Developer</p>
            <p>PodCodar</p>
            <p className="text-xs italic">09/2022 - Present</p>
            <p className="text-xs py-1">Achievements/Tasks</p>
            <ul className="text-xs pt-1 list-disc">
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Peer Mentor</p>
            <p>PodCodar</p>
            <p className="text-xs italic">09/2022 - Present</p>
            <p className="text-xs py-1">Achievements/Tasks</p>
            <ul className="text-xs pt-1 list-disc">
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Freelancer</p>
            <p>PodCodar</p>
            <p className="text-xs italic">09/2022 - Present</p>
            <p className="text-xs py-1">Achievements/Tasks</p>
            <ul className="text-xs pt-1 list-disc">
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
              <li className="ml-4">
                Accomplishment in this very first work Experience
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-[#313c4e] mt-2">
          <div className="flex items-center gap-1">
            <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center">
              <HiOutlineAcademicCap className="h-7 w-7" />
            </div>
            <h3 className="text-[1.5rem] font-bold">Education</h3>
          </div>
          <div>
            <p className="font-bold">BSc. Mechanical Engineering</p>
            <p>Federal University of Minas Gerais</p>
            <div className="flex justify-between text-xs italic pr-10">
              <p>01/2011 - 12/2019</p>
              <p>Belo Horizonte, Brazil</p>
            </div>
          </div>
          <div>
            <p className="font-bold">BSc. Mechanical Engineering</p>
            <p>Federal University of Minas Gerais</p>
            <div className="flex justify-between text-xs italic pr-10">
              <p>08/2014 - 08/2015</p>
              <p>Budapest, Hungary</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Technical Degree IT</p>
            <p>Federal University of Minas Gerais</p>
            <div className="flex justify-between text-xs italic pr-10">
              <p>01/2008 - 12/2010</p>
              <p>Divinópolis, Brazil</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebebeb] row-span-5 rounded-b-lg text-[#313c4e] p-2 flex flex-col gap-2">
        <div>
          <div className="flex gap-1 items-center">
            <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center">
              <FaBookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-[1.5rem] font-bold">Skills</h3>
          </div>
          <div className="text-xs flex flex-wrap gap-1 py-1">
            <div className="bg-[#989da6] rounded p-1">Next.js</div>
            <div className="bg-[#989da6] rounded p-1">Next.jsaaa</div>
            <div className="bg-[#989da6] rounded p-1">Next.jsa</div>
            <div className="bg-[#989da6] rounded p-1">Next</div>
            <div className="bg-[#989da6] rounded p-1">Nextaa.js</div>
            <div className="bg-[#989da6] rounded p-1">Next.jas</div>
            <div className="bg-[#989da6] rounded p-1">Next.jsaaaa</div>
            <div className="bg-[#989da6] rounded p-1">Next.jsaaaaaaaaa</div>
            <div className="bg-[#989da6] rounded p-1">Next.js</div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center">
              <FaCompassDrafting className="h-5 w-5" />
            </div>
            <h3 className="text-[1.5rem] font-bold">Projects</h3>
          </div>
          <div className="text-xs flex flex-col gap-1 py-1">
            <p className="font-bold">Project Title</p>
            <p className="italic">project.link</p>
            <ul>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
            </ul>
          </div>
          <div className="text-xs flex flex-col gap-1 py-1">
            <p className="font-bold">Project Title</p>
            <p className="italic">project.link</p>
            <ul>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
            </ul>
          </div>
          <div className="text-xs flex flex-col gap-1 py-1">
            <p className="font-bold">Project Title</p>
            <p className="italic">project.link</p>
            <ul>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
              <li>Achievements of the project</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center">
              <BsTranslate className="h-5 w-5" />
            </div>
            <h3 className="text-[1.5rem] font-bold">Languages</h3>
          </div>
          <div className="text-xs flex flex-col gap-1 py-1">
            <p>Portuguese</p>
            <p className="text-[#989da6] italic">Native</p>
          </div>
          <div className="text-xs flex flex-col gap-1 py-1">
            <p>English</p>
            <p className="text-[#989da6] italic">
              Full Professional Proficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
