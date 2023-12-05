import "antd/dist/antd.min.css";
import {Pagination, Dropdown, Menu ,} from "antd";
import {createClient} from "@supabase/supabase-js"

import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import AddressContainer from "../components/address-container";

import FormContainer from "../components/form-container";
import {useEffect,useState} from "react";

const defaultOrder=  [
  {
    key:"1",
    label:(
      <a onClick={(e)=>e.preventDefault()}>
        Popular Properties
      </a>
    )
  },
  {
    key:"2",
    label:(
      <a onClick={(e)=>e.preventDefault()}>
        Latest Properties
      </a>
    )
  }, {
    key:"3",
    label:(
      <a onClick={(e)=>e.preventDefault()}>
        Recommended Properties
      </a>
    )
  }

];

const PropertiesGridView = () => {
  const client = createClient(process.env.NEXT_PUBLIC_URL,process.env.NEXT_PUBLIC_KEY);

  const  [properties, setProperties]=useState( []);

    useEffect(()=>{
        const fetchProperties = async()=>{
          const result=await client.from
          ('properties').select('*');

          setProperties(result.data);
        }
        fetchProperties();
    },[])


  return (
    <div className=" bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="relative w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="relative w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              
              menu={{items:defaultOrder}}
              
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <AddressContainer  allProperties={properties}/>
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          
              <Pagination
              defaultCurrent={1}
              total={50}
              />
        </div>
      </div>
      <FormContainer propOverflow="hidden" />
    </div>
  );
};

export default PropertiesGridView;
