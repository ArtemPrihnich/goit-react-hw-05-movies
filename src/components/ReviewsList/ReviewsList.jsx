import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem'
import React from 'react'

export default function ReviewsList({ data }) {
    return (
        <ul>
            {console.log(data)}
            {data.map((item) => {
                return (
                    // <CastListItem key={item.id} data={item} />
                    <ReviewsListItem key={item.id} data={item} />
                )
            })}
        </ul>
    )
}

// export default function CastList({ data }) {
//     return (
//         <ul>
//             {console.log(data)}
//             {data.map((item) => {
//                 return (
//                     <CastListItem key={item.id} data={item} />
//                 )
//             })}
//         </ul>
//     )
// }