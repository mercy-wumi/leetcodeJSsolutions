const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null
    let pointA = headA
    let pointB = headB

    while (pointA != pointB) {
        pointA = !pointA ? headB : pointA.next
        pointB = !pointB ? headA : pointB.next
    }

    return pointA
};