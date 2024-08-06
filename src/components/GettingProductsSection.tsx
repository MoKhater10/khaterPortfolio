"use client";
import React, { useEffect, useState } from 'react'
import Projects from './Projects';
import { MarqueeDemo } from './AllProjectsCom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase.config';

const GettingProductsSection = () => {
    const useGetData = (collectionName: string) => {
        const [data, setdata] = useState([]);
        const collectionRef = collection(db, collectionName);
        const [dataLoading, setdataLoading] = useState(true);
    
        useEffect(() => {
          setdataLoading(true);
          const getData = async () => {
            // firebase firestore realtime data update
            onSnapshot(collectionRef, (snapshot: any) => {
              setdata(
                snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
              );
              setdataLoading(false);
            });
          };
          getData();
        }, [collectionRef]);
        return { data, dataLoading };
      };
      const { data: getProducts } = useGetData("projects");
      const products = getProducts?.sort((a: any, b: any) => {
        return a.sort - b.sort;
      });
  return (
    <div>
        <Projects projects={products} />
      <MarqueeDemo
        projects={products.map((p: any) => {
          return { name: p.name, body: p.p, id: p.id };
        })}
      />
    </div>
  )
}

export default GettingProductsSection