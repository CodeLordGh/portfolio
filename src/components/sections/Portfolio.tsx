import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import Tenzies from '../../assets/tenzies.jpg'

const Portfolio = () => {
  return (
    <div className="h-full flex flex-col justify-center text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl text-center font-bold">Project Name: Tenzies</h3>
          <img src={Tenzies} alt="Tenzies image" />
          <div >
            <p className="text-gray-600 dark:text-gray-300">
              A web-based version of the classic Tenzies game built with React. 
              Players roll dice, hold values, and aim to match all dice to the same number in the fewest rolls.
              The app features an interactive UI with real-time updates and checks for victory conditions automatically.
            </p>
            <div className='flex justify-center'>
              <button className='flex'><FaGithub/>Github Repo</button>
              <button className='flex ml-4'><FaEye/>View Site</button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-600 dark:text-gray-300">Description of project 2</p>
          <div className='flex'>
            <button className='flex border-black-400'><FaGithub/>Github Repo</button>
            <button className='flex ml-4'><FaEye/>Live Version</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
