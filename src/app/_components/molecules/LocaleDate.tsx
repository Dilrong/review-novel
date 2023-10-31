'use client'

import React from "react";
import Caption from "@/app/_components/atoms/Caption";

interface Props {
    date: Date;
}

function LocaleDate({date}: Props) {
    return (
        <Caption text={new Intl.DateTimeFormat('kr').format(
            new Date(date),
        )}/>
    )
}

export default LocaleDate
