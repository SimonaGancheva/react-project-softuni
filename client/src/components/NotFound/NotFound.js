import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className={styles.notFound}></div>
            <h2 >Page Not Found</h2>
            <p>Return to</p>
           <h3 className={styles.catalog}> <Link to='/catalog'>CATALOG</Link></h3>
            
          </div>
        </div>
      </div>
    )
}