import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/logo.png';
import VoteChart from './VoteChart';
import RightNavBar from './RightNavBar';

const SquareWithTextAndNumber = ({ text, number, borderColor, width }) => {
  const style = {
    backgroundColor: '#FFFFFF',
    borderBottom: `4px solid ${borderColor || '#FF0000'}`,
    flex: `0 0 ${width || '15%'}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
    height: '180px',
    borderRadius: '10px',
  };

  return (
    <div style={style} className="m-28 mr-10 ml-32">
      <p className="text-sm font-bold mb-1">{text}</p>
      <p className="text-lg font-bold">{number}</p>
    </div>
  );
};

const Dashboard = () => {
  const [voteData, setVoteData] = useState({
    total: 0,
    agree: 0,
    disagree: 0,
    dontknow: 0,
  });

  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/vote/results/1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setVoteData(data);
        } else {
          console.log('Erreur lors de la récupération des données de vote.');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête :', error);
      }
    };

    const fetchVisits = () => {
      const storedVisits = localStorage.getItem('totalVisits');
      setTotalVisits(storedVisits ? parseInt(storedVisits, 10) / 2 : 0);
    };

    fetchData();
    fetchVisits();
  }, []);

  return (
    <div className="grid grid-cols-8 grid-rows-5 gap-1">
      <div className="row-span-5 h-screen item-center text-white justify-between flex flex-col" style={{ backgroundColor: '#B4CC04' }}>
        <img style={{ height: "15%" }} src={logo} alt="logo" className="mx-auto mb-4 mt-4" />
        <div className="text-center mb-4">
          <p className="font-bold text-xl">
            <FontAwesomeIcon icon={faChartColumn} className="mr-2 mt-14" />
            Statistiques
          </p>
        </div>
        <div className="mt-auto text-center mb-4">
          <p className="font-bold text-xl">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Paramètres
          </p>
        </div>
      </div>
      <div className="col-span-7" style={{ backgroundColor: '#EEF0F3' }}>
        <div className='flex align-middle float-right h-full mr-4'>
          <RightNavBar />
        </div>
      </div>
      <div className="col-span-7 row-span-4 col-start-2 row-start-2" style={{ backgroundColor: '#EEF0F3' }}>
        <div className="flex">
          <div className='mx-10 w-52'>
            <SquareWithTextAndNumber text="Total Votes" number={voteData.total} borderColor="#01A58E"/>
          </div>
          <div className='mx-10 w-52'>
            <SquareWithTextAndNumber text="Votes Positives" number={voteData.agree} borderColor="#4CD964"/>
          </div>
          <div className='mx-10 w-52'>
            <SquareWithTextAndNumber text="Votes Négatives" number={voteData.disagree} borderColor="#FF3B30"/>
          </div>
          <div className='mx-10 w-52'>
            <SquareWithTextAndNumber text="Votes Blancs" number={voteData.dontknow} borderColor="#FFCC00"/>
          </div>
          <div className='mx-10 w-52'>
            <SquareWithTextAndNumber text="Nombre Total De Visites" number={totalVisits}/>
          </div>
        </div>
        <div className='mt-40 ml-10'>
          <VoteChart data={voteData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
