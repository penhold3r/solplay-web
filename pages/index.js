import { withRouter } from 'next/router';
import Layout from '../src/components/layout';

import data from '../src/data/data';

class Index extends React.Component {

   render() {

      return (
         <Layout>
            <h1>Solplay</h1>
            <pre>
               {
                  JSON.stringify(data, null, 2)
               }
            </pre>
         </Layout>
      )
   }
}

export default Index;
