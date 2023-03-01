import styles from '@sp/clients.module.scss'
import Page from 'components/Page'
import Swapper from 'components/Swapper'

export default function Clients() {
  return (
    <Page>
      <div className={styles.main}>
        <p>some brands i've made cool stuff with</p>
        <Swapper {...{ items }} />
      </div>
    </Page>
  )
}

const items = [
  'Audi',
  'Anuel AA',
  'Barbie',
  'Motorola',
  'Marines',
  'UPS',
  'Showtime',
  'United Airlines',
  'Qualcomm',
  'Netflix',
  'Intel',
  'E Trade',
  'Pratt Institute',
  'Feedmob',
  'Literacy Partners',
  'Memphis Meats',
  'Tag Heuer',
  'Box',
  'Visa',
  'Uber',
  'Gaggneau',
  'Wacoal',
  'Hallmark',
  'National Geographic',
  'Marie Claire',
  'Wall Street Journal',
  'Maserati',
  'Citrix',
  'Amazon Web Services',
  'Tenor',
  'HBO',
  'The Bosco',
  'L’Attitude',
]
