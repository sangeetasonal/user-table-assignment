import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function usePaginatedUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/users?page=${page}&limit=50`);
      if (res.data.data.length > 0) {
        setUsers(prev => [...prev, ...res.data.data]);
        setPage(prev => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, [page, loading, hasMore]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, fetchUsers, loading };
}
