import React from 'react'
import Skeleton from 'react-loading-skeleton'

const AuthFormSkeleton = ({ type }: { type: string }) => {
    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <div
                    className='mb-12 cursor-pointer items-center gap-2 flex'
                >
                    <Skeleton
                        width={34}
                        height={34}
                        containerClassName='size-[24px] max-xl:size-14 flex-0'
                    />
                    <Skeleton
                        width={120}
                        height={30}
                        containerClassName='size-[24px] max-xl:size-14 flex-0'
                    />
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                    <Skeleton
                        width={120}
                        height={30}
                    />
                </div>
            </header>
            <>
                <div>
                    <div className="space-y-8">
                    {type === 'sign-up' && (
                        <>
                            <div className="flex gap-4">
                                <Skeleton
                                    width={150}
                                    height={36}
                                />
                                <Skeleton
                                    width={150}
                                    height={36}
                                />
                            </div>
                            <Skeleton
                                width={320}
                                height={36}
                            />
                            <Skeleton
                                width={320}
                                height={36}
                            />
                            <div className="flex gap-4">
                                <Skeleton
                                    width={320}
                                    height={36}
                                />
                                <Skeleton
                                    width={320}
                                    height={36}
                                />
                            </div>
                            <div className="flex gap-4">
                                <Skeleton
                                    width={150}
                                    height={36}
                                />
                                <Skeleton
                                    width={150}
                                    height={36}
                                />
                            </div>
                        </>
                    )}
                        <Skeleton
                            width={320}
                            height={36}
                        />
                        <Skeleton
                            width={320}
                            height={36}
                        />
                        <div className="flex flex-col gap-4">
                            <Skeleton
                                width={320}
                                height={36}
                            />
                        </div>

                    </div>
                </div>
                <footer className="flex justify-center gap-1">
                    <Skeleton
                        width={300}
                        height={15}
                    />
                    <Skeleton
                        width={200}
                        height={20}
                    />
                </footer>
            </>
        </section>
    )
}

export default AuthFormSkeleton