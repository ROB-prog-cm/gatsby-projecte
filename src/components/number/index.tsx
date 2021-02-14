import { Link } from 'gatsby';
import * as React from 'react';
import styles from './styles.module.scss';
import ReactSlider from 'react-slider';
import Rooms from '@components/rooms';
import Dropdown from '@components/dropdown';
import Checkbox from '@components/checkbox';
import Calendar from '@components/calendar';
import Button from '@components/button';

interface IProps {
  siteTitle: string;
}

const LeftPanel = ({ siteTitle }: IProps) => {
  return (
    <div className={styles.number}>
      <div className={'container'}>
        <div className={styles.number_inner}>
          <div className={styles.panel}>
            <span className={styles.date}>даты пребывания в отеле</span>
            <Calendar />
            <div className={styles.title}>
              <div className={styles.title_1}>
                <span className={styles.date}>диапазон цены</span>
                <span className={styles.price_1}>5 000₽ - 10 000₽</span>
              </div>
              <ReactSlider
                className={styles.horizontal_slider}
                thumbClassName={styles.example_thumb}
                trackClassName={styles.example_track}
                defaultValue={[40, 70]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props} />}
                pearling
                minDistance={10}
              />
              <span className={styles.day}>
                Стоимость за сутки пребывания в номере
              </span>
            </div>
            <div className={styles.checkbox}>
              <span className={styles.span}>правила дома</span>
              <Checkbox
                id_checkbox={'checkbox_1'}
                html_checkbox={'checkbox_1'}
                text_label={'Можно курить'}
              />
              <Checkbox
                id_checkbox={'checkbox_2'}
                html_checkbox={'checkbox_2'}
                text_label={'Можно с питомцами'}
              />
              <Checkbox
                id_checkbox={'checkbox_3'}
                html_checkbox={'checkbox_3'}
                text_label={'Можно пригласить гостей (до 10 человек)'}
              />
              <span className={styles.span}>доступность</span>
              <Checkbox
                id_checkbox={'checkbox_4'}
                html_checkbox={'checkbox_4'}
                info={'Широкий коридор'}
                text_label={'Ширина коридоров в номере не менее 91 см.'}
              />
              <Checkbox
                id_checkbox={'checkbox_5'}
                html_checkbox={'checkbox_5'}
                info={'Помощник для инвалидов'}
                text_label={
                  'На 1 этаже вас встретит специалист и проводит до номера.'
                }
              />
            </div>
            <span className={styles.option_2}>удобства номера</span>
            <Dropdown
              triggerClassName={styles.trigger}
              title={'2 спальни, 2 кровати...'}
            >
              <div className={styles.inner}>
                <div className={styles.inner_2}>
                  <span className={styles.text_button}>спальни</span>
                  <span className={styles.text_button}>кровати</span>
                  <span className={styles.text_button}>ванные комнаты</span>
                </div>
                <div className={styles.inner_2}>
                  <div className={styles.inner_2}>
                    <div className={styles.wrap}>
                      <Button />
                    </div>
                    <div className={styles.wrap}>
                      <Button />
                    </div>
                    <div className={styles.wrap}>
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </Dropdown>
            <Dropdown
              triggerClassName={styles.trigger_2}
              title={'дополнительные удобства'}
            >
              <div className={styles.checkbox}>
                <Checkbox
                  id_checkbox={'checkbox_6'}
                  html_checkbox={'checkbox_6'}
                  text_label={'Завтрак'}
                />
                <Checkbox
                  id_checkbox={'checkbox_7'}
                  html_checkbox={'checkbox_7'}
                  text_label={'Письменный стол'}
                />
                <Checkbox
                  id_checkbox={'checkbox_8'}
                  html_checkbox={'checkbox_8'}
                  text_label={'Стул для кормления'}
                />

                <Checkbox
                  id_checkbox={'checkbox_9'}
                  html_checkbox={'checkbox_9'}
                  text_label={'Кроватка'}
                />
                <Checkbox
                  id_checkbox={'checkbox_10'}
                  html_checkbox={'checkbox_10'}
                  text_label={'Телевизор'}
                />
                <Checkbox
                  id_checkbox={'checkbox_11'}
                  html_checkbox={'checkbox_11'}
                  text_label={'Шампунь'}
                />
              </div>
            </Dropdown>
          </div>
          <Rooms />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
