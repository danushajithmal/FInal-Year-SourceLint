const qry3 = "select * from users where id  =  '1' or \.<\ union select 1,@@VERSION -- 1'"

const qry4 = " select * from users where id  =  1 or 1# union select version  (    )  ,version  (    )   -- 1"

