import Skeleton from "react-loading-skeleton"

const HeaderBoxSkeleton = () => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
            <Skeleton width={150} height={30}/>
        </h1>
        <Skeleton width={200} height={10} className='header-box-subtext'></Skeleton>
    </div>
  )
}

export default HeaderBoxSkeleton