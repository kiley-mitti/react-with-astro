import {
  RuxCheckbox,
  RuxContainer,
  RuxIcon,
  RuxStatus,
  RuxTable,
  RuxTableBody,
  RuxTableCell,
  RuxTableHeader,
  RuxTableRow,
} from '@astrouxds/react';
import { useData } from 'providers/data';
import { useState } from 'react';
import './bottom-panel.css';

export const BottomPanel: React.FC = () => {
  const { contacts } = useData();
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev);

  return (
    <RuxContainer className='Dashboard-bottom-panel'>
      <h2 slot='header'>Center bottom panel</h2>
      <RuxTable>
        <RuxTableHeader>
          <RuxTableRow>
            <RuxTableCell id='BottomPanel-header-checkbox'>
              <RuxCheckbox checked={checked} onRuxchange={handleChange} />
            </RuxTableCell>
            <RuxTableCell>Ground</RuxTableCell>
            <RuxTableCell>Equipment</RuxTableCell>
            <RuxTableCell>Status</RuxTableCell>
            <RuxTableCell>Number</RuxTableCell>
            <RuxTableCell>Icon</RuxTableCell>
          </RuxTableRow>
        </RuxTableHeader>
        <RuxTableBody>
          {contacts.slice(10, 30).map(({ _id, ...c }) => (
            <RuxTableRow key={_id}>
              <RuxTableCell>
                <RuxCheckbox checked={checked} />
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.contactGround}</p>
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.contactEquipment}</p>
              </RuxTableCell>
              <RuxTableCell>
                <RuxStatus status={c.contactStatus} />
              </RuxTableCell>
              <RuxTableCell>
                <p>{c.contactName}</p>
              </RuxTableCell>
              <RuxTableCell>
                <RuxIcon icon='border-clear' size='extra-small' />
              </RuxTableCell>
            </RuxTableRow>
          ))}
        </RuxTableBody>
      </RuxTable>
    </RuxContainer>
  );
};
