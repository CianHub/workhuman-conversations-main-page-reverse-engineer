import React, { useContext, useEffect } from 'react';

import SideBar from '../../display/SideBar/SideBar';
import ContentContainer from '../ContentContainer/ContentContainer';
import { CharacterContext } from '../../../state/CharacterState/CharacterContext';
import { actions } from '../../../state/CharacterState/CharacterReducer';

import './AppContainer.css';

const AppContainer = () => {
  const dispatch = useContext(CharacterContext)[1];

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: actions.addCharacter,
        payload: [
          {
            id: 0,
            name: 'Chewbacca',
            img:
              'https://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg',
            timeline: {
              priorities: [
                {
                  type: 'active',
                  tasks: ['Destroy the Death Star', 'Repair the Falcon'],
                },
                {
                  type: 'closed',
                  tasks: ['Brush Fur', 'Escape Hoth', 'Save Leia'],
                },
              ],
              feedback: [
                {
                  authorId: 1,
                  message: 'Great flying Chewie!',
                  age: '7 Days ago',
                },
              ],
              checkIn: [
                {
                  authorId: 3,
                  title: 'Falcon Repairs',
                  message: 'We have to meet about the repairs furball!',
                  age: 'October 30, 2020',
                },
              ],
            },
          },
          {
            id: 1,
            name: 'Luke Skywalker',
            img:
              'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F03%2Fstar-wars-a-new-hope-2000.jpg',
            timeline: {
              priorities: [
                {
                  type: 'active',
                  tasks: ['Destroy the Death Star', 'Avenge Obi Wan'],
                },
                {
                  type: 'closed',
                  tasks: ['Build Lightsaber', 'Escape Hoth', 'Save Leia'],
                },
              ],
              feedback: [
                {
                  authorId: 3,
                  message: 'Not bad kid!',
                  age: '5 Days ago',
                },
                {
                  authorId: 0,
                  message: 'RAAAARRR',
                  age: '9 Days ago',
                },
              ],
              checkIn: [
                {
                  authorId: 0,
                  title: 'RUUUUUU??',
                  message: 'RAAWRR RURR RUUR',
                  age: 'October 31, 2020',
                },
              ],
            },
          },
          {
            id: 2,
            name: 'Darth Vader',
            img:
              'https://www.denofgeek.com/wp-content/uploads/2018/01/vader-main.jpg?fit=1440%2C960',
            timeline: {
              priorities: [
                {
                  type: 'active',
                  tasks: ['Build the Death Star', 'Destroy the Rebels'],
                },
                {
                  type: 'closed',
                  tasks: ['Defeat Obi Wan'],
                },
              ],
              feedback: [
                {
                  authorId: 3,
                  message: 'You Suck Vader',
                  age: '1 Days ago',
                },
              ],
              checkIn: [
                {
                  authorId: 1,
                  title: 'I will avenge Obi Wan!',
                  message: 'Look out',
                  age: 'December 31, 2019',
                },
              ],
            },
          },
          {
            id: 3,
            name: 'Han Solo',
            img:
              'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/mzv09wuznh4tfeqgoyg8/greedo',
            timeline: {
              priorities: [
                {
                  type: 'active',
                  tasks: ['Destroy the Death Star', 'Repair the Falcon'],
                },
                {
                  type: 'closed',
                  tasks: ['Escape Hoth', 'Save Leia'],
                },
              ],
              feedback: [
                {
                  authorId: 0,
                  message: 'RAWWRRR!',
                  age: '1 Days ago',
                },
                {
                  authorId: 1,
                  message: 'Nice Job Getting Us Out Han!',
                  age: '2 Days ago',
                },
              ],
              checkIn: [
                {
                  authorId: 3,
                  title: 'Falcon Repairs',
                  message: 'We have to meet about the repairs furball!',
                  age: 'October 30, 2020',
                },
              ],
            },
          },
        ],
      });
    }, 100);
  }, [dispatch]);

  return (
    <div className="app-container">
      <SideBar />
      <ContentContainer />
    </div>
  );
};

export default AppContainer;
