import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { log } from "console";

interface CollectionInfo {
  slug: string;
  title: string;
  cover_url: string;
  supply: number;
  verified: boolean;
  semantic_slug: string;
  description: string;
  floor: number;
  volume: number;
  usd_volume: number;
  discord: string;
  twitter: string;
  website: string;
}

function Stats() {
  const [data, setData] = useState<CollectionInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
const API = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const runReq = async () => {
      try {
        const query = `
        query fetchCollectionWithoutNfts($slug: String) {
          aptos {
            collections(
              where: {
                _or: [{ semantic_slug: { _eq: $slug } }, { slug: { _eq: $slug } }]
              }
            ) {
              id
              title
              slug
              semantic_slug
              description
              floor
              volume
              usd_volume
              cover_url
              supply
              verified
              discord
              twitter
              website
            }
          }
        }
        `;

        const variables = {
          slug: "chad-panda-2ac9320a" // Adjust this value as necessary
        };

        const res: AxiosResponse<any> = await axios({
          url: "https://api.indexer.xyz/graphql",
          method: 'post',
          data: {
            query,
            variables
          },
          headers: {
             "x-api-key": `${API}`,
            "x-api-user": "Chad Panda"
          }
        });

        if (res.data.errors) {
          throw new Error(res.data.errors[0].message);
        }

        const collection = res.data.data.aptos.collections[0];
        setData(collection);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(`No DATA`);
        setLoading(false);
      }
    };
    runReq();
  }, []);

  console.log("My data:", data);
  // console.log(process.env.REACT_APP_API_KEY)

  return (
    <div className="flex">
      <div className="z-10 bg-green-500 bg-opacity-10 backdrop-blur-lg flex flex-col text-white w-screen">
        <h1 className="text-center font-bold text-4xl">STATS</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center">{error}</p>
        ) : (
          data && (
            <div className="flex w-full justify-between p-5 items-center ">
              <div className="text-center">
                <h3>Supply</h3>
                <h2 className="text-2xl font-bold">{data.supply }</h2>
              </div>
              <div className="text-center">
                <h3 className="text-center">Floor Price</h3>
                <h2 className="text-2xl font-bold">{data.floor/ 10**8}</h2>
              </div>
            
              <div className="text-center">
                <h3>USD Volume</h3>
                <h2 className="text-2xl font-bold">${Math.round(data.usd_volume) }</h2>
              </div>
             
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Stats;
