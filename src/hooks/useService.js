import { useState, useEffect } from "react";

const useService = (id) => {
    const [service, setService] = useState({});

    useEffect(() => {
        fetch("/servicesDatabase.json")
            .then((res) => res.json())
            .then((data) => {
                setService(data.find((s) => s.id === parseInt(id)));
            });
    }, []);

    return service;
};

export default useService;
