import { styled } from 'styled-components';

import { useEffect, useState } from 'react';
import { AiFillFolderOpen } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import useMediaQuery from '../../shared/hooks/useMediaQuery';
import Bio from './bio/Bio';
import Education from './education/Education';
import Empty from './empty/Empty';
import Projects from './projects/Projects';
import Recommendations from './recommendations/Recommendations';

const tabs = [
  {
    name: 'bio',
    color: '#E99287',
  },
  {
    name: 'education',
    color: '#43D9AD',
  },
  {
    name: 'recommendations',
    color: '#3A49A4',
  },
  {
    name: 'projects',
    color: '#fac863',
  },
];

export default function AboutPage() {
  const [showTab, setShowTab] = useState(() => {
    const storedTabs = JSON.parse(localStorage.getItem('show'));
    return storedTabs && storedTabs.length > 0 ? storedTabs : ['bio'];
  });
  const [activeTab, setActiveTab] = useState(() => {
    const storedActiveTab = JSON.parse(localStorage.getItem('active'));
    const storedTabs = JSON.parse(localStorage.getItem('show'));

    if (storedActiveTab && storedTabs) {
      if (storedTabs.includes(storedActiveTab)) {
        return storedActiveTab;
      } else {
        const newActiveTab = storedTabs[storedTabs.length - 1] || '';
        localStorage.setItem('active', JSON.stringify(newActiveTab));
        return newActiveTab;
      }
    }

    return 'bio';
  });

  const matches = useMediaQuery('(min-width: 554px)');

  const chooseTab = (name) => {
    setActiveTab(name);
    if (!showTab.includes(name)) {
      setShowTab((prevTabs) => [...prevTabs, name]);
    } else {
      return;
    }
  };

  useEffect(() => {
    localStorage.setItem('show', JSON.stringify(showTab));
    localStorage.setItem('active', JSON.stringify(activeTab));
  }, [showTab, activeTab]);

  const removeTab = (name) => {
    const updatedTabs = showTab.filter((tab) => tab !== name);
    const newActiveTab = updatedTabs[updatedTabs.length - 1] || '';
    setActiveTab(newActiveTab);
    setShowTab(updatedTabs);
  };

  const chooseActiveTab = (name) => {
    setActiveTab(name);
  };

  return (
    <Wrapper>
      <LeftBar>
        {tabs.map((tab) => (
          <SelectButton key={tab.name} onClick={() => chooseTab(tab.name)}>
            <AiFillFolderOpen size={20} color={tab.color} />
            <span>
              {!matches && tab.name.length > 9
                ? `${tab.name.slice(0, 6)}`
                : tab.name}
            </span>
          </SelectButton>
        ))}
      </LeftBar>
      <MiddleBar>
        <Header>
          {showTab.map((name) => (
            <Tab
              onClick={() => chooseActiveTab(name)}
              className={name === activeTab ? 'active' : ''}
              key={name}
            >
              {!matches && name.length > 6 ? `${name.slice(0, 4)}` : name}{' '}
              <Cross
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(name);
                }}
              />
            </Tab>
          ))}
        </Header>
        {activeTab === '' && <Empty />}
        {activeTab === 'bio' && <Bio />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'recommendations' && <Recommendations />}
        {activeTab === 'projects' && <Projects />}
      </MiddleBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftBar = styled.div`
  border-right: 1px solid #1e2d3d;
  min-width: 274px;
  @media (max-width: 1008px) {
    min-width: 235.5px;
  }
  height: 100%;
  padding: 30px 0 10px 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 90px;
    margin-top: 70px;
    padding: 10px 32px;
    justify-content: space-around;
    border-bottom: 1px solid #1e2d3d;
    border-top: 1px solid #1e2d3d;
  }
  @media (max-width: 455px) {
    justify-content: center;
    gap: 16px;
  }
`;

const SelectButton = styled.button`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: #607b96;
  &:hover {
    color: white;
  }
  @media (max-width: 366px) {
    font-size: 14px;
  }
`;

const MiddleBar = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #1e2d3d;
  display: flex;
`;

const Tab = styled.div`
  color: #607b96;
  padding: 10px 10px 10px 20px;
  border-right: 1px solid #1e2d3d;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  cursor: pointer;
  &.active {
    color: white;
  }
  @media (max-width: 420px) {
    padding: 7px;
    gap: 15px;
  }
  @media (max-width: 366px) {
    font-size: 14px;
  }
`;

const Cross = styled(RxCross2)`
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
