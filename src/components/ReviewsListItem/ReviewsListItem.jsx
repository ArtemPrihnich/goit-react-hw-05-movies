import React from 'react'

export default function ReviewsListItem({ data }) {
    const { author, content, created_at } = data
    return (
        <div>
            <li>
                <p>{author}</p>
                <p>{content}</p>
                <p>{created_at}</p>
            </li>
        </div>
    )
}

// export default function CastListItem({ data }) {
//     const { profile_path, name, character } = data
//     return (
//         <li>
//             <img href={profile_path} alt={name} />
//             <p>{character}</p>
//             <p>{name}</p>
//         </li>
//     )
// }
