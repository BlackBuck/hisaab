import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 rounded-xl flex flex-col items-center justify-center py-12">
        <div className='flex flex-row w-full h-16 text-center items-center my-2 mt-0 mx-2 bg-gray-100 rounded-lg p-2'>
            <div className='w-60 min-h-full bg-blue-300 rounded-lg items-center text-center'>
                <h1 className='text-4xl'>Hisaab-Kitaab</h1>
            </div>
            <div className='absolute right-1 bg-blue-300 rounded-lg text-xl p-2'>
                <Link href={"/login"}>
                    SignIn
                </Link>
            </div>
        </div>
      <main className="flex flex-col bg-gray-100 rounded-xl items-center text-center p-2 md:p-6">
        <div className="flex flex-col bg-gray-100 rounded-xl md:flex-row items-center text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 items-center text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl items-center text-center">
              Welcome to Hisaab-Kitaab
            </h1>
            <p className="mt-4 text-lg text-gray-900">
              Welcome to Hisaab-Kitaab, your ultimate solution for managing
              personal finances. Our intuitive platform allows you to seamlessly
              track your spending, categorize expenses, and gain insightful
              reports to help you stay on top of your financial health. Whether
              you're looking to save for a future goal or simply want to keep an
              eye on your daily spending, our Hisaab-Kitaab provides all the
              tools you need to achieve financial clarity.
            </p>
          </div>
          <div className="mt-10">
            <Image
              src="/hero3.jpeg"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div></div>
          
        </div>
        <div className='items-start text-left'>
            <p className="mt-4 text-3xl text-black">
              With Hisaab-Kitaab, you can:
            </p>
            <ul className="mt-4 list-disc list-inside text-left text-gray-900">
              <li>Track your daily, weekly, and monthly expenses with ease.</li>
              <li>Set and monitor budgets to avoid overspending.</li>
              <li>
                Categorize your expenses to understand where your money goes.
              </li>
              <li>
                Generate detailed reports to analyze your spending patterns.
              </li>
              <li>Access your financial data securely from any device.</li>
            </ul>
            <p className="mt-4 text-lg text-gray-900">
              Start taking control of your finances today with Hisaab-Kitaab.
              Sign up now and join the community of users who are achieving
              their financial goals and reducing financial stress with our
              comprehensive expense tracking solution.
            </p>
          </div>
      </main>
    </div>
  );
};

export default Home;
