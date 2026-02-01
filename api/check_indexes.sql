SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'Document'
ORDER BY indexname;
